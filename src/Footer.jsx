

import { Box } from '@mui/material';

function Footer() {

    return(
        
            <Box sx = {{
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            flexDirection: 'row', 
            height: '100px'}}>
            
           
            <p>&copy; {new Date().getFullYear()} Richard Stuckey</p>
           
            </Box>
    
    );
    }

    export default Footer