import React, { useState } from 'react';
import style from './filter.module.css';

const filters = (props) => {
    return <>
        <h3 style={{ textAlign: "center" }}><b>All Movies ({props.count})</b></h3>
        <div className={style.filters} >
            <div className="col-md-12">
                <div className="form-inline" style={{ padding: "10px" }}>
                    <div className={'form-group ' + style.formGroupItem}>
                        <label htmlFor="filters"><b>List Filtering: </b></label>
                        <input type="text" name="query" value={props.filters.query} onChange={props.filterChangeHandler} className="form-control" id="filters" />
                    </div>
                    <div className={'form-group ' + style.formGroupItem}>
                        <label htmlFor="filters"><b>Genre: </b></label>
                        <select className={'form-control ' + style.select}>
                            <option>All</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="form-inline" style={{ marginTop: "10px" }}>
                <div className={' form-group ' + style.formGroupItem}>
                    <label htmlFor="filters"><b>Release Date : </b></label>
                    <select className={'form-control ' + style.select} id="sel1">
                        <option>All</option>
                    </select>
                </div>
                <div className={'form-group ' + style.formGroupItem}>
                    <label htmlFor="filters"><b>Rating: </b></label>
                    <select className={'form-control ' + style.select} id="sel1">
                        <option>All</option>
                    </select>
                </div>

                <div className={'form-group ' + style.formGroupItem}>
                    <label htmlFor="filters"><b>Sort By: </b></label>
                    <select className={'form-control ' + style.select} id="sel1">
                        <option>Populaity</option>
                    </select>
                </div>

                <div className={'form-group ' + style.formGroupItem}>
                    <label htmlFor="filters"><b>Year: </b></label>
                    <select onChange={props.filterChangeHandler} value={props.filters.year} name="year" data-width="100%" className={'form-control ' + style.select} id="sel1">
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                    </select>
                </div>
            </div>

        </div></>;
}

export default filters;
