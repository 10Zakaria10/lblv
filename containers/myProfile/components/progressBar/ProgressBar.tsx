import * as React from 'react';
import { LinearProgressProps } from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import BorderLinearProgress from './ProgressBar.style';

interface IProgressBar{
    progress: number | undefined;
}

function LinearProgressWithLabel(props: LinearProgressProps & { value: number | undefined}) {
  const progressValue  : number= props.value ?? 0;
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <BorderLinearProgress variant="determinate" {...props} value={progressValue}/>
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          progressValue,
        )}%`}</Typography>
      </Box>
    </Box>
  );    
}

const ProgressBar:React.FC<IProgressBar>=({progress}:IProgressBar) =>{
  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgressWithLabel value={progress} />
    </Box>
  );
}
export default ProgressBar;