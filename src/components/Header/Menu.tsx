import { Profile } from "./Profile";
import {
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	useBreakpointValue,
} from "@chakra-ui/react";
import Link from "next/link";

import { BsFillPersonFill } from "react-icons/bs";
import { MdColorLens } from "react-icons/md";
import { RiSettings5Fill } from "react-icons/ri";
import { IoMdExit } from "react-icons/io";

export function MenuComponent() {
	const isWildVersion = useBreakpointValue({
		base: false,
		lg: true,
	});

	return (
		<Menu>
			<MenuButton>
				<Profile showProfileData={isWildVersion} />
			</MenuButton>

			<MenuList bg="gray.700" borderColor="gray.700" my="3">
				<MenuItem
					_focus={{ bg: "gray.700" }}
					_hover={{ bg: "gray.600" }}
					display="flex"
					gap="3"
				>
					<BsFillPersonFill size={20} /> Perfil
				</MenuItem>

				<MenuItem _hover={{ bg: "gray.600" }} display="flex" gap="3">
					<MdColorLens size={20} /> Tema
				</MenuItem>

				<MenuItem _hover={{ bg: "gray.600" }} display="flex" gap="3">
					<RiSettings5Fill size={20} /> Configurações
				</MenuItem>

				<Link href="/" passHref>
					<MenuItem _hover={{ bg: "gray.600" }} display="flex" gap="3">
						<IoMdExit size={20} /> Sair
					</MenuItem>
				</Link>
			</MenuList>
		</Menu>
	);
}
