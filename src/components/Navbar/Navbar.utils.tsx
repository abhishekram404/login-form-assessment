import { Icon } from '@iconify/react/dist/iconify.js'

export const getNavbarUserDropdownItems = ({
  onLogoutClick,
}: {
  onLogoutClick?: VoidFunction
}) => [
  {
    label: 'Profile',
    icon: <Icon icon="lucide:user-round" />,
    onClick: () => alert('Profile clicked'),
  },

  {
    label: 'Logout',
    icon: <Icon icon="material-symbols:logout" />,
    onClick: onLogoutClick,
  },
]
