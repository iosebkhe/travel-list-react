import PropTypes from 'prop-types';

const Stats = ({ items }) => {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your travel list 🚀</em>
      </p>
    );

  const numItems = items.length;
  const numItemList = items.filter((item) => item.packed).length;
  const percentage = Math.round((numItemList / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈️"
          : ` 💼 You have ${numItems} items on your list, and you already packed ${numItemList} (${percentage}%)`}
      </em>
    </footer>
  );
};

Stats.propTypes = {
  items: PropTypes.array,
};


export default Stats;
