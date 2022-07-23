import { Stack } from "@chakra-ui/react";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

// ICONS
import { IoCalendarNumberSharp } from "react-icons/io5";
import { MdPeopleAlt, MdContactPage } from "react-icons/md";
import { RiContactsLine, RiDashboardLine, RiNumbersLine } from "react-icons/ri";
import { SiGooglemessages } from "react-icons/si";
import { TbClock } from "react-icons/tb";
import { MdClass } from "react-icons/md";
import { HiDocumentDownload } from "react-icons/hi";
import { GoKey, GoBook } from "react-icons/go";

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
        <NavLink href="/schedule" icon={TbClock}>
          Horário individual
        </NavLink>
        <NavLink href="/buletim" icon={RiNumbersLine}>
          Boletim
        </NavLink>
        <NavLink href="/subjects" icon={MdClass}>
          Meterial de aula
        </NavLink>
        <NavLink href="/diaries" icon={GoBook}>
          Diários
        </NavLink>
      </NavSection>

      <NavSection title="GERAL">
        <NavLink href="/calendar" icon={IoCalendarNumberSharp}>
          Calendário Acadêmico
        </NavLink>
        <NavLink href="/internship" icon={MdPeopleAlt}>
          Estágios
        </NavLink>
        <NavLink href="/messages" icon={SiGooglemessages}>
          Caixa de Mensagens
        </NavLink>
        <NavLink href="/messages" icon={MdContactPage}>
          Currículo Pessoal
        </NavLink>
        <NavLink href="/messages" icon={HiDocumentDownload}>
          Solicitar Documentos
        </NavLink>
        <NavLink href="/messages" icon={GoKey}>
          Alterar Senha
        </NavLink>
      </NavSection>
    </Stack>
  );
}
