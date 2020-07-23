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
        a: { content: 'CAMPUS TÉCNICAS', link: './p3_tecnicas.html' },
        ul: [
            { class: 'lista-departamento' },
            { id: 'l2-1', a: { content: 'Facultad de Informática', link: '#informatica' } },
            { id: 'l2-2', a: { content: 'Facultad de Ingeniería',  link: '#ingenieria' } },
            { id: 'l2-3', a: { content: 'Facultad de Matemáticas', link: '#matematica' } }
        ]
    },
    {
        id: 'l1-letras',
        class: 'item-facultad',
        a: { content: 'CAMPUS LETRAS', link: './p4_letras.html' },
        ul: [
            { class: 'lista-departamento' },
            { id: 'l3-1', a: { content: 'Facultad de Derecho',   link: '#derecho' } },
            { id: 'l3-2', a: { content: 'Facultad de Filología', link: '#filologia' } },
            { id: 'l3-3', a: { content: 'Servicios Generales',   link: '#servicios-generales' } },
            { id: 'l3-4', a: { content: 'Servicio Informática',  link: '#servicios-informatica' } }
        ]
    },
    {
        id: 'l1-ciencias',
        class: 'item-facultad',
        a: { content: 'CAMPUS CIENCIAS', link: './p5_ciencias.html' }
    },
    {
        id: 'l1-auditoria',
        class: 'item-facultad',
        a: { content: 'AUDITORÍA', link: './auditoria.html' }
    },
    {
        id: 'l1-bitacora',
        class: 'item-facultad',
        a: { content: 'BITÁCORA', link: './p6_bitacora.html' },
        ul: [
            { class: 'lista-departamento' },
            { id: 'l5-1', a: { content: 'Inocente Patrichs', link: '#patrichs' } },
            { id: 'l5-2', a: { content: 'Cabanillas Diego', link: '#diego' } },
            { id: 'l5-3', a: { content: 'Mini Miguel', link: '#miguel' } },
            { id: 'l5-4', a: { content: 'Olivieri Stefano', link: '#stefano' } },
            { id: 'l5-5', a: { content: 'Vicente Gabriel', link: '#gabriel' } }
        ]
    }
]
