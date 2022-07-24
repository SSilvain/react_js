import s from "./Footer.module.css"
const Footer = ({boola}) => {
	return(
		<>
			<p className={s.footer_paragraph}>Hello, World! <em>{boola}</em></p>
		</>
	)
}

export default Footer