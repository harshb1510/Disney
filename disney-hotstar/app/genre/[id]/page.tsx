import { Button } from '@/components/ui/button';
import React from 'react'

type Props={
    params:{
        id:string;
    };
    searchParams:{
        genre:string;
    };
}
function GenrePage({params:{id}, searchParams:{genre}}: Props) {
    
  return (
    <div>
      Welcome to the genre: {genre}
      
    </div>
  )
}

export default GenrePage
