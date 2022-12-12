import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import {useState} from 'react';

export default function RatingSIze() {
  const [rating, setRating] = useState(0);

  return (
    <Stack spacing={1}>
      { !rating ? <Rating name="size-large" value={rating} size="large" onChange={(event, newValue) => setRating(newValue)}/> : <Rating disabled/>}      
      { !rating ? <p>No rating</p> : <p>{rating}</p>}
    </Stack>
  );
}

//source: https://mui.com/material-ui/react-rating/