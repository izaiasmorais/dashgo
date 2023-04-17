import { Stack } from "@chakra-ui/react";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

import { RiContactsLine, RiDashboardLine, RiNumbersLine } from "react-icons/ri";
import { TbClock } from "react-icons/tb";

export function SidebarNav() {
	return (
		<Stack spacing="12" align="flex-start" w={256}>
			<NavSection title="PRINCIPAL">
				<NavLink href="/dashboard" icon={RiDashboardLine}>
					Dashboard
				</NavLink>
				<NavLink href="/users" icon={RiContactsLine}>
					Usuários
				</NavLink>
			</NavSection>

			<NavSection title="TURMA">
				<NavLink href="/forms" icon={TbClock}>
					Formulários
				</NavLink>
				<NavLink href="/auto" icon={RiNumbersLine}>
					Automoção
				</NavLink>
			</NavSection>
		</Stack>
	);
}
