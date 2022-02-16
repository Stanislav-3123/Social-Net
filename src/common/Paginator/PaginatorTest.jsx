import React from 'react';
import styles from "./Paginator.module.css";

let PaginatorTest = ({ totalUsersCount, pageSize, currentPage, onPageChange }) => {
	let pagesCount = Math.ceil(totalUsersCount / pageSize);
	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}
	return <div className={styles.Pages}>
		{pages.map(p => {
			return <span className={currentPage === p && styles.selectedPage}
				onClick={(e) => {
					onPageChange(p);
				}}>{p}</span>
		})}
	</div>
}

export default PaginatorTest;