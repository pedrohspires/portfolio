import { MouseEventHandler, ReactNode, useState } from "react";
import { FaAddressCard, FaHome } from "react-icons/fa";
import { FaPersonCircleCheck } from "react-icons/fa6";
import { HiPresentationChartLine } from "react-icons/hi";
import { MdContactPhone } from "react-icons/md";
import Scrollbar from "react-scrollbars-custom";
import Navbar from "./components/Navbar";
import classNames from "./utils/classNames";

function App() {
	const [menuOpen, setMenuOpen] = useState<boolean>(false);

	function toggleMenu() {
		setMenuOpen(!menuOpen);
	}

	function LiItem({ titulo, onClick, icone }: { titulo: string, onClick: MouseEventHandler<HTMLLIElement>, icone: ReactNode }) {
		return (
			<li className="p-2 flex gap-2 items-center z-50" onClick={onClick}>
				{icone}
				{titulo}
			</li>
		);
	}

	return (
		<>
			<div
				className={classNames(
					"w-screen md:hidden absolute z-10 bg-primary-dark/25 text-gray-100",
					menuOpen ? "h-screen" : "h-0"
				)}
				onClick={toggleMenu}
			>
				<div
					className={classNames(
						"overflow-hidden transform transition-transform duration-500 ease-in-out",
						menuOpen ? "translate-y-0" : "-translate-y-full"
					)}
				>
					<Navbar onClickMenu={toggleMenu} className="border-b-primary-light border-b" />
					<ul className="bg-primary-dark p-2 flex flex-col items-center">
						<LiItem
							titulo="Home"
							onClick={() => console.log("Home")}
							icone={<FaHome className="w-6 h-6" />}
						/>
						<LiItem
							titulo="Carreira"
							onClick={() => console.log("Carreira")}
							icone={<FaAddressCard className="w-6 h-6" />}
						/>
						<LiItem
							titulo="Projetos"
							onClick={() => console.log("Projetos")}
							icone={<HiPresentationChartLine className="w-6 h-6" />}
						/>
						<LiItem
							titulo="Habilidades"
							onClick={() => console.log("Habilidades")}
							icone={<FaPersonCircleCheck className="w-6 h-6" />}
						/>
						<LiItem
							titulo="Contato"
							onClick={() => console.log("Contato")}
							icone={<MdContactPhone className="w-6 h-6" />}
						/>
					</ul>
				</div>
			</div>

			<Scrollbar style={{ width: "100vw", height: "100vh" }} className="bg-primary-normal text-gray-100">
				<Navbar onClickMenu={toggleMenu} />
			</Scrollbar>
		</>
	)
}

export default App
