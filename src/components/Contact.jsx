import React from 'react';
import { Outlet,NavLink } from 'react-router-dom';

const Contact = () => {
    return (
        <div className='card bg-warning p-3 m-2 mx-auto w-100'>
            <h3 className='btn bg-success'>Contact page</h3>

            <div className='d-flex col-12 mx-auto w-50 justify-content-center'>
                <NavLink to='/contact/menu' className='btn-danger w-25 m-2 d-flex justify-content-center'>Menu</NavLink>
                <NavLink to='/contact/menutop' className='btn-danger w-25 m-2 d-flex justify-content-center'>Menu Top</NavLink>
            </div>


            <div className='col-12 d-flex justify-content-center'>
                <Outlet />
            </div>



            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque fugiat tenetur quae ipsa reiciendis iusto inventore soluta ab tempore totam quibusdam, architecto dolorem est ducimus odit voluptas esse vero eveniet.</p>


            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque fugiat tenetur quae ipsa reiciendis iusto inventore soluta ab tempore totam quibusdam, architecto dolorem est ducimus odit voluptas esse vero eveniet.</p>

            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque fugiat tenetur quae ipsa reiciendis iusto inventore soluta ab tempore totam quibusdam, architecto dolorem est ducimus odit voluptas esse vero eveniet.</p>

            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque fugiat tenetur quae ipsa reiciendis iusto inventore soluta ab tempore totam quibusdam, architecto dolorem est ducimus odit voluptas esse vero eveniet.</p>

            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque fugiat tenetur quae ipsa reiciendis iusto inventore soluta ab tempore totam quibusdam, architecto dolorem est ducimus odit voluptas esse vero eveniet.</p>

            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque fugiat tenetur quae ipsa reiciendis iusto inventore soluta ab tempore totam quibusdam, architecto dolorem est ducimus odit voluptas esse vero eveniet.</p>

        </div>
    );
};

export default Contact;