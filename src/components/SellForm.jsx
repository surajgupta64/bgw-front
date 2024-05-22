import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { Snackbar } from "@mui/base";
import Alert from "@mui/material/Alert";
import emailjs from "emailjs-com";

const options = [
  "Metals",
  "Plastics",
  "Paper and Cardboard",
  "Glass",
  "Electronics",
  "Copper",
  "Aluminium",
  "Furniture",
];

export default function SellForm({ open, handleClose }) {
  const [openSuccessToast, setOpenSuccessToast] = useState(false);
  const [openErrorToast, setOpenErrorToast] = useState(false);
  const [formData, setFormData] = useState({
    Name: "",
    email: "",
    mobile: "",
    address1: "",
    address2: "",
    pinCode: "",
    scrapType: "",
    scrapKG: "",
    affordableTime: "",
    remarks: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const { address1, address2, ...otherData } = formData;
      const address = `${address1}, ${address2}`.trim();

      const response = await fetch(
        "https://bgw-api.vercel.app/sellNow/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...otherData,
            address,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit data");
      }

      await emailjs.send(
        "service_v9oijsn",
        "template_94x3to8",
        {
          to_name: formData.Name,
          reply_to: "surajgupta6425@gmail.com",
          message: "Sell now order placed successfully.",
          type:'Sell Now',
          name: formData.Name,
          phone: formData.mobile,
          address: address,
          pincode: formData.pinCode,
          scraptype: formData.scrapType,
          scrapKG: formData.scrapKG,
        },
        "MYJf9hkNdOjbtAMAa"
      );

      setOpenSuccessToast(true);
      handleClose(); // Close the dialog after successful form submission
    } catch (error) {
      console.error("Error:", error);
      setOpenErrorToast(true);
      handleClose();
      // Handle error appropriately, e.g., show an error message to the user
    }
  };
  const handleSuccessToastClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSuccessToast(false);
  };

  const handleErrorToastClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenErrorToast(false);
  };
  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll="paper"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Sell Now Form</DialogTitle>
        <DialogContent dividers={true}>
          <TextField
            fullWidth
            margin="normal"
            label="Name"
            name="Name"
            value={formData.Name}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Mobile"
            name="mobile"
            type="number"
            value={formData.mobile}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Address1"
            name="address1"
            placeholder="building name, street"
            value={formData.address1}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Address2"
            name="address2"
            placeholder="area, town, city"
            value={formData.address2}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Pin Code"
            name="pinCode"
            type="number"
            value={formData.pinCode}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="normal"
            select
            label="Scrap Type"
            name="scrapType"
            value={formData.scrapType}
            onChange={handleChange}
          >
            {options.map((option, index) => (
              <MenuItem key={index} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            fullWidth
            margin="normal"
            label="Scrap KG"
            type="number"
            name="scrapKG"
            value={formData.scrapKG}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="normal"
            type="datetime"
            label="Affordable Time"
            name="affordableTime"
            value={formData.affordableTime}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Remarks"
            name="remarks"
            value={formData.remarks}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={openSuccessToast}
        autoHideDuration={6000}
        onClose={handleSuccessToastClose}
      >
        <Alert onClose={handleSuccessToastClose} severity="success">
          Form submitted successfully!
        </Alert>
      </Snackbar>
      <Snackbar
        open={openErrorToast}
        autoHideDuration={6000}
        onClose={handleErrorToastClose}
      >
        <Alert onClose={handleErrorToastClose} severity="error">
          Failed to submit form. Please try again later.
        </Alert>
      </Snackbar>
    </>
  );
}
