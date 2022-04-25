import { Drawer } from 'antd'
import useHandleScreenWidth from '../../hooks/utilities/useHandleScreenWidth'

const TransactionDetails = ({ visible, closeTransactionDetails, transaction }) => {

    const width = useHandleScreenWidth()

    return (
        <Drawer
            visible={visible}
            onClose={closeTransactionDetails}
            bodyStyle={{ padding: '10px' }}
            // closable={false}
            width={width <= 500 ? '100%' : width <= 700 ? '70%' : width <= 900 ? '60%' : width <= 1100 ? '45%' : width <= 1200 ? '40%' : width <= 1400 ? '35%' : '25%'}
        >
            {transaction.name}
        </Drawer>
    )
}

export default TransactionDetails