import React from 'react';
import ProductTile from './ProductTile';
import Frames from './products/frames';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
}
from 'material-ui/Table';

const ProductGrid = () => {
    return (
        <div className='ProductGrid'>


            <Table>
                <TableHeader displaySelectAll={false}>
                    <TableRow>
                        <TableHeaderColumn>Frame</TableHeaderColumn>
                        <TableHeaderColumn>Motor</TableHeaderColumn>
                        <TableHeaderColumn>Speed</TableHeaderColumn>
                    </TableRow>
                </TableHeader>


                <TableBody displayRowCheckbox={false}>
                    <TableRow>
                        <TableHeaderColumn>1</TableHeaderColumn>
                        <TableHeaderColumn>
                            <ProductTile product={Frames.no1}/>
                        </TableHeaderColumn>
                        <TableHeaderColumn>John Doe</TableHeaderColumn>
                    </TableRow>

                    <TableRow>
                        <TableHeaderColumn>1</TableHeaderColumn>
                        <TableHeaderColumn>
                            <ProductTile product={Frames.no2}/>
                        </TableHeaderColumn>
                        <TableHeaderColumn>John Doe2</TableHeaderColumn>
                    </TableRow>

                    <TableRow>
                        <TableHeaderColumn>1</TableHeaderColumn>
                        <TableHeaderColumn>
                            <ProductTile product={Frames.no3}/>
                        </TableHeaderColumn>
                        <TableHeaderColumn>John Doe3</TableHeaderColumn>
                    </TableRow>
                </TableBody>
            </Table>

            {/*<ProductTile product={Frames.no1}/>*/}
            {/*<ProductTile product={Frames.no2}/>*/}
            {/*<ProductTile product={Frames.no3}/>*/}
        </div>
    )
}
export default ProductGrid;