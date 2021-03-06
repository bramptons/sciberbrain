import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';


export const NavHeader = ({NavLinks})=> {
	return (
		<div className='main' >
			{
				NavLinks.map((nav, index) =>{
					return (
									<li key={index} className='linkBody'>
										<NavLink to={NavLinks[index].nav}>
											<p className='white'>{NavLinks[index].text}</p>
										</NavLink>
									</li>
				);
				})
			}
		
		</div>
		);
}

// <p className='white'></p>