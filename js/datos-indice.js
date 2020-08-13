const menuContent = [ 
    {   class: 'lista-facultades' },
    {
        id: 'l1-presentacion',
        class: 'item-facultad',
        a: { content: 'PRESENTACIÓN', link: './index.html' },
    },
    {
        id: 'l1-introduccion',
        class: 'item-facultad',
        a: { content: 'INTRODUCCIÓN', link: './p1_introduccion.html' }
    },
    {
        id: 'l1-universidad',
        class: 'item-facultad',
        a: { content: 'UNIVERSIDAD', link: './p2_universidad.html' },
    },
    {
        id: 'l1-tecnicas',
        class: 'item-facultad',
        a: { content: 'CAMPUS TÉCNICAS', link: './tecnicas.html' },
        ul: [
            { class: 'lista-departamento'},
            { id: 'l2-1', a: { content: 'Facultad de Informática', link: '#informatica' } },
            { id: 'l2-2', a: { content: 'Facultad de Ingeniería',  link: '#ingenieria' } },
            { id: 'l2-3', a: { content: 'Facultad de Matemáticas', link: '#matematica' } }
        ]
    },
    {
        id: 'l1-letras',
        class: 'item-facultad',
        a: { content: 'CAMPUS LETRAS', link: './letras.html' },
        ul: [
            { class: 'lista-departamento' },
            { id: 'l3-1', a: { content: 'Facultad de Derecho',   link: '#derecho' } },
            { id: 'l3-2', a: { content: 'Facultad de Filología', link: '#filologia' } },
            { id: 'l3-3', a: { content: 'Servicios Generales',   link: '#servicios-generales' } },
            { id: 'l3-4', a: { content: 'Servicio Informática',  link: '#servicios-informatica' } }
        ]
    },
    {
        id: 'l1-prueba',
        class: 'item-facultad',
        a: { content: 'CAMPUS CIENCIAS', link: './ciencias.html' }
    },
    {
        id: 'l1-auditoria',
        class: 'item-facultad',
        a: { content: 'AUDITORÍA', link: './auditoria.html' },
        ul: [
            { class: 'lista-departamento'},
            { id: 'l6-1', a: { content: 'Auditoria de Inventario', link: '#inventario' } },
            { id: 'l6-2', a: { content: 'Auditoria de Instalación',  link: '#instalacion' } },
            { id: 'l6-3', a: { content: 'Auditoria Operacional', link: '#operacional' } },
            { id: 'l6-4', a: { content: 'Auditoria de eficiencia', link: '#eficiencia' } },
            { id: 'l6-5', a: { content: 'Auditoria de Seguridad',  link: '#seguridad' } }
        ]
    },
    {
        id: 'l1-memorias',
        class: 'item-facultad',
        a: { content: 'MEMORIAS', link: './memorias.html' },
        ul: [
            { class: 'lista-departamento' },
            { id: 'l6-1', a: { content: 'Inconvenientes', link: '#inconvenientes' } },
            { id: 'l6-2', a: { content: 'Viabilidad de soluciones', link: '#viabilidad' } },
            { id: 'l6-3', a: { content: 'Implementaciones adicionales', link: '#adicional' } },
            { id: 'l6-4', a: { content: 'Ubicación de los servidores', link: '#servidores' } },
            { id: 'l6-5', a: { content: 'Accesos', link: '#accesos' } },
            { id: 'l6-6', a: { content: 'Bitácora', link: '#bitacora' } }
        ]
    }
]
