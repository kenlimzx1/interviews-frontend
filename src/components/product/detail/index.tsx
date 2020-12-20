import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { useHistory } from 'react-router';
import iphoneProto from '../../../assets/images/iphone-proto3.png';
import ShareIcon from '@material-ui/icons/Share';
import { Box, Button, Typography } from '@material-ui/core';

const Detail: React.FC = () => {
  const urlParams = new URLSearchParams(window.location.search);

  const history = useHistory();

  const product = urlParams.get('product');

  function handleClose() {
    urlParams.delete('product');
    history.push({
      search: urlParams.toString(),
    })
  }

  return (
    <Dialog
      open={!!product}
      fullWidth
      maxWidth="md"
      onClose={handleClose}
    >
      <DialogContent>
        <Box display="flex">
          <Box display="flex" flex="70" flexDirection="column">
            <Box width="100%">
              <img width="100%" style={{ objectFit: 'contain' }} src={iphoneProto} alt="" />
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              padding="1rem"
            >
              <Typography variant="h3">
                Iphone X
              </Typography>
              <Button>
                <ShareIcon/>
                Share for 3D Model
              </Button>
            </Box>
          </Box>
          <Box flex="30" padding="1rem">
            <Typography align="justify">
              *** BACA INI SEBELUM MEMBELI ****
              - Produk Original Bekas Garansi Internasional
              - Fungsional Normal Beserta fitur nya Tidak Minus
              - Mulus 96%-98% (like New)
              - LCD dan casing masih original pabrik
              - 100% BISA Semua SIM Operator INDO
              - iCloud aman 100%
              - Imei BOX dan mesin COCOK 100%
              - Garansi personal 1 minggu ( tukar baru )
              - Kelengkapan OEM (Dus,Kabel,Adpt,HF)
              - Kelengkapan HF ORI
              (khusus iP 7 – 8 – X -Xs )
            </Typography>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  )
}

export default Detail;
