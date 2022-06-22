export interface SidebarOption {
  id: string;
  title: string;
  icon: string;
  route?: string;
  children?: SidebarOption[];
}

export const SIDEBAR_OPTIONS: SidebarOption[] = [
  {
    id: "manage",
    title: 'Administración',
    icon: 'settings',
    children: [
      { id: "FM01", title: 'Personal', icon: 'manage_accounts', route: '/administracion/administracion-colaboradores' },
      { id: "FM02", title: "Unidades Administrativas", icon: 'business', route: '/administracion/unidades-administrativas' },
      { id: "FM03", title: "Puestos de Trabajo", icon: 'account_tree', route: '/administracion/puestos-trabajo' },
      { id: "FM04", title: "Equipos de Trabajo", icon: 'groups', route: '/administracion/equipos' },
      { id: "FM05", title: "Documentos de Fiscalización", icon: 'folder', route: '/administracion/documentos' },
      { id: "FM06", title: "Asignar Perfil a Colaborador", icon: 'person_add', route: '/administracion/asignar-perfil' }
    ]
  },
  {
    id: "schedule",
    title: 'Programación',
    icon: 'person_search',
    children: [
      { id: "FS01", title: "Ingreso de Solicitudes", icon: "post_add", route: "/programacion/solicitudes" },
      { id: "FS02", title: "Revisión de Hallazgos", icon: "grading", route: "/programacion/revision/hallazgos" },
      { id: "FS03", title: "Revisión de Alcances", icon: "task", route: "/programacion/revision/alcances" },
      { id: "FS04", title: "Desasignacion de Casos", icon: "assignment", route: "/programacion/desasignacion-casos" },
      { id: "FS05", title: "Reasignación de Casos", icon: "swap_horizontal", route: "/programacion/reasignacion-casos" },
      { id: "FS06", title: "Elaboracion de Alcances", icon: "note_add", route: "/programacion/elaboracion/alcance" },
      { id: "FS07", title: "Elaboracion de Alcances Masivos", icon: "dynamic_feed", route: "/programacion/elaboracion/masiva/alcance" },
      { id: "FS08", title: "Gestion de Alcances Masivos", icon: "dynamic_feed", route: "/programacion/gestion/alcances/masivos" },
      { id: "FS09", title: "Programacion Masiva", icon: "grid_view", route: "/programacion/casos-masivos" },
      { id: "FS10", title: "Ingreso de Insumos", icon: "note_add", route: "/programacion/Ingreso-Insumos" },
      { id: "FS11", title: "Asignacion de Insumos", icon: "assignment_ind", route: "/programacion/Asignacion-Insumos" },
      { id: "FS12", title: "Cartera de Insumos", icon: "account_balance_wallet", route: "/programacion/Cartera-Insumos" },
      { id: "FS13", title: "Cartera de Aprobacion Programa", icon: "account_balance_wallet", route: "/programacion/Aprobacion-Programa" },
      { id: "FS14", title: "Imprimir Alcance", icon: "print", route: "/reportes/reporte-general-alcance" },
      { id: "FS15", title: "Revisión de Insumos y Asignación", icon: "task", route: "/programacion/revision-insumos-asignacion" },
      { id: "FS16", title: "Análisis y validación de casos", icon: "task", route: "/programacion/analisis-validacion-casos" },
    ]
  },
  {
    id: "execution",
    title: 'Ejecución',
    icon: 'event_note',
    children: []
  },
  {
    id: "resolve",
    title: 'Resolución',
    icon: 'event_available',
    children: []
  }
];