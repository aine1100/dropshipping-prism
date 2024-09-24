import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { MdOutlinePendingActions } from "react-icons/md";
import { BsBoxSeamFill } from 'react-icons/bs';
import { MdOutlineConfirmationNumber } from "react-icons/md";

export default function StatCard() {

    const cardItems = [
        { name: 'Total Sales', amount: 43 , icon: <ShoppingBagIcon className="text-[32px]" /> },
        { name: 'Total returns', amount: 43, icon: <BsBoxSeamFill className="text-[32px]" /> },
        { name: 'Pending', amount: 43, icon: <MdOutlinePendingActions className="text-[32px]" /> },
        { name: 'Unconfirmed', amount: 43, icon: <MdOutlineConfirmationNumber className="text-[32px]" /> },
    ];



    return(
        <div>
            {cardItems.map((items) => (
                <div>
                    <p>{items.name}</p>
                    <p>{items.amount}</p>
                    <p>{items.icon}</p>
                </div>
            ))}
        </div>
    )
}