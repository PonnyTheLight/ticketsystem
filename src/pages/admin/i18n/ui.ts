
import { Config } from "../settings"

export const languages = {
    en: 'English',
    es: 'Español',
};

export const defaultLang = Config.default_language;

export const ui = {
    en: {
        'nav.version': 'Version',
        'nav.dashboard': 'Dashboard',
        'nav.settings': 'Settings',
        'nav.users': 'Users',

        'nav.blog.entries': 'Entries',

        'nav.tickets.general': 'General',

        'panel.settings': 'Settings',
        'panel.settings.Create_Record': 'Create Record',
        'panel.settings.Name': 'Name',
        'panel.settings.Type': 'Type',
        'panel.settings.Value': 'Value',
        'panel.settings.Create': 'Create',
        'panel.settings.Update': 'Update',
        'panel.settings.Delete': 'Delete',
        'panel.settings.Integer': 'Integer',
        'panel.settings.Float': 'Float',
        'panel.settings.Decimal': 'Decimal',
        'panel.settings.String': 'String',
        'panel.settings.Boolean': 'Boolean',
        'panel.settings.Date': 'Data',
        'panel.settings.Time': 'Time',

        'panel.tickets.general.Username': 'Username',
        'panel.tickets.general.Email': 'Email',
        'panel.tickets.general.Admin': 'Admin',
        'panel.tickets.general.Worker': 'Worker',
        'panel.tickets.general.Yes': 'Yes',
        'panel.tickets.general.No': 'No',
    },
    es: {
        'nav.version': 'Versión',
        'nav.dashboard': 'Panel de Control',
        'nav.settings': 'Ajustes',

        'panel.settings': 'Ajustes',
        'panel.settings.Create_Record': 'Crear Valor',
        'panel.settings.Name': 'Nombre',
        'panel.settings.Type': 'Tipo',
        'panel.settings.Value': 'Valor',
        'panel.settings.Create': 'Crear',
        'panel.settings.Update': 'Actualizar',
        'panel.settings.Delete': 'Eliminar',
        'panel.settings.Integer': 'Entero',
        'panel.settings.Float': 'Decimal(Float)',
        'panel.settings.Decimal': 'Decimal',
        'panel.settings.String': 'Texto',
        'panel.settings.Boolean': 'Si/No',
        'panel.settings.Date': 'Fecha',
        'panel.settings.Time': 'Hora',
    },
} as const;