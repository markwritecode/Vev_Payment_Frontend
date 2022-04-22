import { notification } from 'antd'

const useHandleNotifications = () => {
  return (status, description) => {
    if (status === 'success') {
        notification.success({ message: 'Successful', description: description || 'Process successful' })
    } else {
        notification.error({ message: 'Error', description: description || 'Error completing your request' })
    }
  }
}

export default useHandleNotifications