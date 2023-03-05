import React from "react";
import axios from 'axios';
import { Button } from '@nextui-org/react';
import { Input, Grid } from "@nextui-org/react";

export default function MyButton() {
    const handleClick = async () => {
      try {
        const response = await axios.post('http://localhost:3000/bio-data', {
            data: {
                age: 22,
                weight: 190,
            }
        });
        console.log(response.data); // process the API response data
      } catch (error) {
        console.error(error);
      }
    };
  
    return (
      <Button onClick={handleClick}>
        Call API
      </Button>
    );
  }  

// function App() {
//   return (
//     <Grid.Container gap={4}>
//       <Grid>
//         <Input bordered animated={true} labelPlaceholder="Default" status="default" />
//       </Grid>
//       <Grid>
//         <Input
//           bordered
//           animated={true}
//           labelPlaceholder="Primary"
//           color="primary"
//         />
//       </Grid>
//       <Grid>
//         <Input
//           bordered
//           animated={true}
//           labelPlaceholder="Secondary"
//           color="secondary"
//         />
//       </Grid>
//     </Grid.Container>
//   );
// }
