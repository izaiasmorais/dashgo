import { Stack } from "@chakra-ui/react";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

// ICONS
import { IoCalendarNumberSharp } from "react-icons/io5";
import { MdPeopleAlt } from "react-icons/md";
import { RiContactsLine, RiDashboardLine, RiNumbersLine } from "react-icons/ri";
import { SiGooglemessages } from "react-icons/si";
import { TbClock } from "react-icons/tb";
import { MdClass } from "react-icons/md";

export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="PRINCIPAL">
        <NavLink href="/dashboard" icon={RiDashboardLine}>
          Dashboard
        </NavLink>

        <NavLink href="/subjects" icon={MdClass}>
          Matérias
        </NavLink>

        <NavLink href="/users" icon={RiContactsLine}>
          Usuários
        </NavLink>
      </NavSection>

      <NavSection title="TURMA">
        <NavLink href="/schedule" icon={TbClock}>
          Horário individual
        </NavLink>
        <NavLink href="/buletim" icon={RiNumbersLine}>
          Boletim
        </NavLink>
      </NavSection>

      <NavSection title="GERAL">
        <NavLink href="/calendar" icon={IoCalendarNumberSharp}>
          Calendário Acadêmico
        </NavLink>

        <NavLink href="/internship" icon={MdPeopleAlt}>
          Estágio
        </NavLink>
        <NavLink href="/messages" icon={SiGooglemessages}>
          Caixa de mensagem
        </NavLink>
      </NavSection>
    </Stack>
  );
}
