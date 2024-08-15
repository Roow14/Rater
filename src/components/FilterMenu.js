import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const MenuContainer = styled.div`
  position: absolute;
  top: 60px; /* Ajuste conforme necessário */
  right: 0;
  background-color: #191919;
  border: 1px solid #cccccc;
  border-radius: 24px;
  width: 377px; /* Largura fixa conforme solicitado */
  height: auto; /* Ajuste para altura dinâmica */
  max-height: 224px; /* Altura máxima conforme solicitado */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  padding: 12px; /* Padding conforme solicitado */
  overflow-y: auto; /* Adiciona rolagem se o conteúdo exceder a altura máxima */
  gap: 12px; /* Espaçamento entre os itens */
  color: white;
  display: flex;
  flex-direction: column;
  font-size: 12px;
`;

const GenreTitle = styled.h3`
  font-size: 12px;
  margin-bottom: 16px;
`;

const TabsContainer = styled.div`
  display: flex;
  flex-direction: row; /* Alinha os itens horizontalmente */
  flex-wrap: wrap; /* Permite quebra de linha se necessário */
  gap: 12px; /* Espaçamento entre os itens */
  margin-bottom: 12px;
`;

const Tab = styled.div`
  font-size: 12px;
  padding: 8px 0;
  cursor: pointer;
  &:not(:last-child) {
    padding: 5px;
    background: #313131;
    border-radius: 12px;
    color: white;
  }
`;

const MoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  font-size: 12px;
  margin-bottom: 16px;
  border: 1px solid #cccccc;
  padding: 8px;
  border-radius: 12px;
`;

const MoreText = styled.span`
  margin-right: 8px;
`;

const DateRangeContainer = styled.div`
  margin-top: 16px;
  text-align: center;
  font-size: 16px;
  color: #cccccc;
`;

const DateRange = styled.div`
  margin: 8px 0;
`;

const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 12px;
`;

const CalendarHeader = styled.div`
  font-size: 16px;
  margin-bottom: 8px;
`;

const Calendar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 14px;
`;

const CalendarDay = styled.div`
  font-size: 14px;
`;

const FilterMenu: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <MenuContainer>
      <GenreTitle>Gênero Cinematográfico</GenreTitle>
      <TabsContainer>
        <Tab>Ficção Científica</Tab>
        <Tab>Ação</Tab>
        <Tab>Aventura</Tab>
        <Tab>Comédia</Tab>
        <Tab>Terror</Tab>
        <Tab>Romance</Tab>
        <Tab>Drama</Tab>
      </TabsContainer>
      <MoreContainer onClick={onClose}>
        <MoreText>Mostrar Mais</MoreText>
        <FontAwesomeIcon icon={faChevronDown} />
      </MoreContainer>
      <DateRangeContainer>
        <DateRange>00/00/0000 a 00/00/0000</DateRange>
        <CalendarContainer>
          <CalendarHeader>Data</CalendarHeader>
          <Calendar>
            <CalendarDay>01/01/2024</CalendarDay>
            <CalendarDay>02/01/2024</CalendarDay>
            <CalendarDay>03/01/2024</CalendarDay>
          </Calendar>
        </CalendarContainer>
      </DateRangeContainer>
    </MenuContainer>
  );
};

export default FilterMenu;
