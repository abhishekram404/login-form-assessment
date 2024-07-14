import Button from '@components/Button'
import { Link } from 'react-router-dom'
import { DashboardStyled } from './Dashboard.styled'

export default function Dashboard() {
  return (
    <DashboardStyled>
      <div>
        <p>Go to the transactions page to view the transactions.</p>
        <Link to="/transactions">
          <Button>Take me to transactions page</Button>
        </Link>
      </div>
    </DashboardStyled>
  )
}
