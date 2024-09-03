/* import axios from "axios";
import { useState, useEffect } from "react";
import { Container, Pagination, PaginationItem, TextField, Stack, Link } from "@mui/material";
import { styled } from '@mui/material/styles';
import InstructorsCard from "@/components/Instructors/InstructorsCard";
import CoursesCard from "@/components/Courses/CoursesCard";

const BASE_URL = 'http://hn.algolia.com/api/v1/search?';

const CustomPaginationItem = styled(PaginationItem)(({ theme }) => ({
  '&.Mui-selected': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  '&:hover': {
    backgroundColor: theme.palette.primary.light,
  },
}));

const CoursesPagination = () => {
  const [posts, setPosts] = useState([]);
  const [query, setQuery] = useState('react');
  const [page, setPage] = useState(2);  // Починаємо з другої сторінки
  const [pageQty, setPageQty] = useState(1);

  useEffect(() => {
    axios.get(BASE_URL + `query=${query}&page=${page - 1}`).then(
      ({ data }) => {
        console.log(data);
        setPosts(data.hits);
        setPageQty(data.nbPages);
      }
    );
  }, [query, page]);

  return (
    <Container>
      <TextField
        fullWidth
        label="query"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <Stack spacing={2} my={2}>
        {!!pageQty && (
          <Pagination
            count={pageQty}
            page={page}
            onChange={(_, num) => setPage(num)}
            siblingCount={2} // Кількість сусідніх сторінок зліва і справа від поточної сторінки
            boundaryCount={2} // Кількість сторінок на початку і в кінці
            renderItem={(item) => (
              <CustomPaginationItem
                {...item}
                // Виключити три крапки
                components={{ ellipsis: () => null }}
              />
            )}
          />
        )}
        {posts.map(post => (
          <Link
            key={post.objectID}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstructorsCard/>
            <CoursesCard/>
          </Link>
        ))}
      </Stack>
    </Container>
  );
}

export default CoursesPagination;
 */













/* const Countries = ({ countries, loading }) => {
  if (loading) {
    return <h2>Завантаження...</h2>;
  }

  return (
    <ul className="list-group mb-2">
      {countries.map((country, i) => (
        <li key={i} className="list-group-item">
          {country.name.common}
          <img src={country.flags.png} alt="прапор" className="ml-2" style={{ width: 25 }} />
        </li>
      ))}
    </ul>
  );
};

export default Countries; */import React from 'react';
import { Link } from 'react-router-dom';

// Компонент для відображення одного курсу
const CoursesItem = ({ coursesImg, title, author, rating, info, price, counter, iconComponent }) => {
  return (
    <div className='flex flex-col items-center'>
      <p>{counter}</p>
      <div className='flex flex-col xs:flex-row sm:flex sm:flex-col bg-white p-6 xs:p-4 border-grey-border rounded-2xl border border-solid xs:gap-2 sm:max-w-61 md:max-w-full'>
        <div className='rounded-lg overflow-hidden object-cover max-h-full'>
          <img className='max-w-full object-cover h-full' src={coursesImg} alt="courses-img" />
        </div>
        <div className='flex flex-col mt-2 sm:mt-4 xs:mt-0'>
          <p className='text-lg font-semibold'>{title}</p>
          <p className='text-grey-700 text-sm xs:text-xs leading-5 xs:leading-4 sm:text-sm xs:py-0 py-1.5 sm:py-1.5 font-normal sm:leading-5'>{author}</p>
          <div className='flex justify-between flex-wrap gap-1'>
            <div className='flex gap-1'>
              {iconComponent}
              {iconComponent}
              {iconComponent}
              {iconComponent}
              {iconComponent}
            </div>
            <p className='text-grey-700 text-xs font-semibold leading-4'>{rating}</p>
          </div>
          <p className='text-grey-700 text-sm leading-5 xs:leading-4 xs:text-xs sm:text-sm sm:py-2 font-normal sm:leading-5 tracking-normal'>{info}</p>
          <div className='flex mt-auto'>
            <p className='text-xl font-bold'>{price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};


const CoursesPagination = ({ data, currentPage }) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 sm:gap-x-5 mx-auto sm:mx-0 md:grid-cols-3 gap-4 md:gap-9 sm:place-items-center'>
      {data.map((item, index) => {
        const id = (currentPage - 1) * 9 + index + 1;
        return (
          <div key={id}>
            <Link to={`/categories/${id}/details/description`}>
              <CoursesItem
                {...item}
                counter={id}
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default CoursesPagination;
