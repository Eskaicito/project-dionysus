import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import './Modal.css'

const Modal = ({children, title, open, handleClose}) => {
    return (
            <Dialog onClose={handleClose} open={open} className='modal'>
                <DialogTitle>{title}</DialogTitle>
                <DialogContent>
                    {children}
                </DialogContent>
            </Dialog>
    );
}
export default Modal