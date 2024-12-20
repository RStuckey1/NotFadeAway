

import { Box } from '@mui/material';

function Footer() {

    return(
        
            <Box sx = {{
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            flexDirection: 'row', 
            height: '100px'}}>
            
           
            <p>&copy; {new Date().getFullYear()} Not Fade Away Audio Equipment Repairs</p>
           
            </Box>
    
    );
    }

    export default Footer