import React from 'react';
import './Pagionations.css';
import { GrFormNext,GrFormPrevious } from "react-icons/gr";
import Button from '@mui/material/Button';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

function Paginations({newsPerPage, totalNews, paginate}) {

	const pageNumbers = [];

	for(let i=1; i <= Math.ceil(totalNews/newsPerPage); i++){
		pageNumbers.push(i)
	}
	
	

  return (
	<div className='pagination'>

			{
				pageNumbers.map(num => (
					<button className='pagination-btn' key={num} onClick={() => paginate(num)}>
						{num}
					</button>
				))
			}



    {/* <Stack spacing={2}>
      <Pagination count={10} shape="rounded" />
    </Stack> */}


	</div>
  )
}

export default Paginations