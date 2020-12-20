import { Box, Grid, Typography } from '@material-ui/core';
import React from 'react';
import styles from './list.module.css';
import iphoneProto from '../../assets/images/iphone-proto2.png';
import Detail from '../../components/product/detail';
import { useHistory } from 'react-router';

interface ListItemProps {
  name?: string;
  img?: string;
  price?: string;
  onClick?: () => void;
}

const ListItem: React.FC<ListItemProps> = (props: ListItemProps) => {
  const { name, img, price, onClick } = props;
  return (
    <Grid item md={4} lg={4} xs={true} onClick={onClick}>
      <Box className={styles.listItem}>
        <Box width="100%" className={styles.listItemImg}>
          <img src={img} alt="" />
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          p={1}
        >
          <Typography>
            {name}
          </Typography>
          <Typography>
            {price}
          </Typography>
        </Box>
      </Box>
    </Grid>
  )
}

const mockData = [
  { id: 1, name: 'Iphone X', price: 'Rp. 14.500.000', img: iphoneProto },
  { id: 2, name: 'Iphone X', price: 'Rp. 14.500.000', img: iphoneProto },
  { id: 3, name: 'Iphone X', price: 'Rp. 14.500.000', img: iphoneProto },
  { id: 4, name: 'Iphone X', price: 'Rp. 14.500.000', img: iphoneProto },
  { id: 5, name: 'Iphone X', price: 'Rp. 14.500.000', img: iphoneProto },
  { id: 6, name: 'Iphone X', price: 'Rp. 14.500.000', img: iphoneProto },
  { id: 7, name: 'Iphone X', price: 'Rp. 14.500.000', img: iphoneProto },
  { id: 8, name: 'Iphone X', price: 'Rp. 14.500.000', img: iphoneProto },
]

const List: React.FC = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const history = useHistory();

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.searchResult}>
          <Typography variant="h4" gutterBottom>
            {`Results for "${urlParams.get('search')}"`}
          </Typography>
        </div>
        <Grid container spacing={2} className={styles.list}>
          {
            mockData.map((row, key) => (
              <ListItem
                key={key}
                name={row.name}
                img={row.img}
                price={row.price}
                onClick={() => {
                  urlParams.set('product', row.id.toString());
                  history.push({
                    search: urlParams.toString(),
                  })
                }}
              />
            ))
          }
        </Grid>
      </div>
      <Detail/>
    </div>
  )
}

export default List;
