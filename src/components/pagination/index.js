import React from 'react';
import {
  PaginationWrap,
  PaginationList,
  PaginationItem,
  PaginationLink
} from './pagination.stc';

const Pagination = ({ currentPage, numberOfPages, rootPage }) => {
  const isFirst = currentPage === 1;
  const isLast = currentPage === numberOfPages;
  const previousPage =
    currentPage - 1 === 1
      ? rootPage
      : '/blog/page/' + (currentPage - 1).toString();
  const nextPage = '/blog/page/' + (currentPage + 1).toString();
  return (
    <PaginationWrap>
      <PaginationList>
        {Array.from({ length: numberOfPages }, (_, i) =>
          currentPage === i + 1 ? (
            <PaginationItem key={`page-number-${i + 1}`}>
              <PaginationLink
                active='true'
                path={`/blog/${i === 0 ? '' : 'page/' + (i + 1)}`}
              >
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ) : (
            <PaginationItem key={`page-number-${i + 1}`}>
              <PaginationLink
                path={`/blog/${i === 0 ? '' : 'page/' + (i + 1)}`}
              >
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          )
        )}
      </PaginationList>
    </PaginationWrap>
  );
};

export default Pagination;
