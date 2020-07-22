const menuContent = [ 
    {   class: 'lista-facultades' },
    {
        id: 'l1-1',
        class: 'item-facultad',
        a: { content: 'PRESENTACIÓN', link: './index.html' },
    },
    {
        id: 'l1-2',
        class: 'item-facultad',
        a: { content: 'INTRODUCCIÓN', link: './p1_introduccion.html' }
    },
    {
        id: 'l1-3',
        class: 'item-facultad',
        a: { content: 'CAMPUS TÉCNICAS', link: './p2_tecnicas.html' },
        ul: [
            { class: 'lista-departamento' },
            { id: 'l2-1', a: { content: 'Facultad de Informática', link: '#informatica' } },
            { id: 'l2-2', a: { content: 'Facultad de Ingeniería',  link: '#ingenieria' } },
            { id: 'l2-3', a: { content: 'Facultad de Matemáticas', link: '#matematica' } }
        ]
    },
    {
        id: 'l1-4',
        class: 'item-facultad',
        a: { content: 'CAMPUS LETRAS', link: './p3_letras.html' },
        ul: [
            { class: 'lista-departamento' },
            { id: 'l3-1', a: { content: 'Facultad de Derecho',   link: '#derecho' } },
            { id: 'l3-2', a: { content: 'Facultad de Filología', link: '#filologia' } },
            { id: 'l3-3', a: { content: 'Servicios Generales',   link: '#servicios-generales' } },
            { id: 'l3-4', a: { content: 'Servicio Informática',  link: '#servicios-informatica' } }
        ]
    },
    {
        id: 'l1-5',
        class: 'item-facultad',
        a: { content: 'CAMPUS CIENCIAS', link: './p4_ciencias.html' },
        ul: [
            { class: 'lista-departamento' },
            { id: 'l4-1', a: { content: 'Facultad de Medicina', link: '#medicina' } }
        ]
    }
]
