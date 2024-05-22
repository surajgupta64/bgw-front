import { Box, Grid } from "@mui/material";
import React from "react";

const WeWork = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 5,backgroundColor:"white", }}>
      <Grid
        container
        spacing={2}
        sx={{
            backgroundColor:"white",
          '--Grid-borderWidth': '1px',
          borderTop: 'var(--Grid-borderWidth) solid',
          borderLeft: 'var(--Grid-borderWidth) solid',
          borderColor: 'divider',
          '& > div': {
            borderRight: 'var(--Grid-borderWidth) solid',
            borderBottom: 'var(--Grid-borderWidth) solid',
            borderColor: 'divider',
          },
        }}
      >
          <Grid {...{ xs: 12, sm: 12, md: 4, lg: 4 }} minHeight={160} />
          <Grid {...{ xs: 12, sm: 12, md: 4, lg: 4 }} minHeight={160} />
          <Grid  {...{ xs: 12, sm: 12, md: 4, lg: 4 }} minHeight={160} />
        
      </Grid>
      </Box>
  );
};

export default WeWork;
