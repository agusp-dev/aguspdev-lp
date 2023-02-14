import PropTypes from 'prop-types'

export const MainLayout = ({ children }) => (
  <div>
    <header>Header</header>
    { children }
  </div>
)

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}
