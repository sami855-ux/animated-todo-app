import PropTypes from "prop-types"

export const Column = ({ title, headingColor, column, cards, setCards }) => {
  return <div className=""></div>
}

Column.propTypes = {
  title: PropTypes.string,
  headingColor: PropTypes.string,
  column: PropTypes.string,
  cards: PropTypes.array,
  setCards: PropTypes.func,
}
