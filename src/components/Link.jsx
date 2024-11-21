import PropTypes from 'prop-types'

const Link = ({ link }) => {
    return(
        <a className="hover:text-teal-300 ease-in-out duration-300" href={`#${link.target}`}>{link.text}</a>
    )
}

Link.propTypes = {
    link: PropTypes.shape({
        text: PropTypes.string.isRequired,
        target: PropTypes.string.isRequired,
    }).isRequired,
};

export default Link