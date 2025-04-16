# EscalaPro - Sistema de Gestão de Escalas de Trabalho

![logo_para_um_aplicativo_chamado_escalapro](https://github.com/user-attachments/assets/4beb95e4-9190-4f73-addb-aaae764d96d2)


Um sistema completo para gerenciamento de escalas de trabalho com controle de férias, folgas e feriados.

## Recursos Principais
- Geração automática de escalas 6x1, 5x1, 5x2, etc.
- Controle de férias e folgas
- Gerenciamento de feriados nacionais e regionais
- Exportação para Excel e CSV
- Sistema de autenticação e permissões

## Tecnologias Utilizadas!

- Python 3
- PyQt5 para interface gráfica
- SQLite para banco de dados
- Pandas para exportação de dados
- Bcrypt para segurança de senhas

## Capturas de Tela
![tela_login](https://github.com/user-attachments/assets/019befab-8525-47e8-91bc-2fd8ac6fe66d)
![tela_gerenciamento_funcionario](https://github.com/user-attachments/assets/5da62773-ffbe-42de-9737-60b6a9eaff7b)
![tela_gerenciamento_escala](https://github.com/user-attachments/assets/b501cad6-0d57-4453-95d4-eb36fb219625)
![tela_configuração](https://github.com/user-attachments/assets/67f20861-2a18-4165-b39a-9feffef4748a)
![escala_excel](https://github.com/user-attachments/assets/94280e72-411e-48e3-b903-b80e485a372c)

## 💾 Versão Executável

Você pode baixar a versão compilada para Windows [aqui](link_para_download).

### Requisitos do Sistema
- Windows 7 ou superior
- .NET Framework 4.5+ (geralmente já instalado)

### Instalação
1. Baixe o instalador `EscalaPro_Setup.exe`
2. Execute e siga as instruções
3. O aplicativo será instalado com ícone no menu Iniciar e área de trabalho

## Arquitetura do Sistema

### Banco de Dados
- Tabela `funcionarios`: Armazena todos os dados dos colaboradores
- Tabela `usuarios`: Gerencia acesso ao sistema
- Tabela `feriados_regionais`: Armazena feriados personalizados

### Segurança
- Autenticação com bcrypt e salt
- Sistema de licenciamento com HMAC-SHA256
- Backups automáticos

### Funcionalidades Avançadas
- Cálculo automático de férias vencidas
- Geração de feriados móveis (Páscoa, Carnaval)
- Exportação para Excel com formatação profissional

## Licença
Este projeto está sob licença MIT.
