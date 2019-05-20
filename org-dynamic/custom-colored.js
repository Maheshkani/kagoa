/* var config = {
        container: "#custom-colored",

        nodeAlign: "BOTTOM",
        
        connectors: {
            type: 'step'
        },
        node: {
            HTMLclass: 'nodeExample1'
        }
    },
    ceo = {
        text: {
		    name: "Balakrishnan B.R",
            title: "Principal CCIT ",
            contact: "balakrishnanbr@incometax.gov.in",
			description: "Office: PR.CCIT,BNG",
        }
    },

    cit = {
        parent: ceo,
        HTMLclass: 'light-gray',
        text:{
            name: "Joe Linux",
            title: "Chief Technology Officer",
        }
    },
	  
    cbo = {
        parent: ceo,
        childrenDropLevel: 2,
        HTMLclass: 'blue',
        text:{
            name: "Linda May",
            title: "Chief Business Officer",
        },
        
    },
    cdo = {
        parent: ceo,
        HTMLclass: 'gray',
        text:{
            name: "John Green",
            title: "Chief accounting officer",
            contact: "Tel: 01 213 123 134",
        },
        
    },
	cyo = {
        parent: ceo,
		childrenDropLevel: 2,
        HTMLclass: 'gray',
        text:{
            name: "John Green",
            title: "Chief accounting officer",
            contact: "Tel: 01 213 123 134",
        },
        
    },
    cio = {
        parent: cto,
        HTMLclass: 'light-gray',
        text:{
            name: "Ron Blomquist",
            title: "Chief Information Security Officer"
        },
       
    },
    ciso = {
        parent: cto,
        HTMLclass: 'light-gray',
        text:{
            name: "Michael Rubin",
            title: "Chief Innovation Officer",
            contact: "we@aregreat.com"
        },
        
    },
    cio2 = {
        parent: cdo,
        HTMLclass: 'gray',
        text:{
            name: "Erica Reel",
            title: "Chief Customer Officer"
        },
        link: {
            href: "http://www.google.com",
			title:"something",
        },
       
    },
    ciso2 = {
        parent: cbo,
        HTMLclass: 'blue',
        text:{
            name: "Alice Lopez",
            title: "Chief Communications Officer"
        },
        
    },
    ciso3 = {
        parent: cbo,
        HTMLclass: 'blue',
        text:{
            name: "Mary Johnson",
            title: "Chief Brand Officer"
        },
       
    },
    ciso4 = {
        parent: cbo,
        HTMLclass: 'blue',
        text:{
            name: "Kirk Douglas",
            title: "Chief Business Development Officer"
        },
        
    },

    chart_config = [
        config,
        ceo,cto,cbo,cyo,
        cdo,cio,ciso,
        cio2,ciso2,ciso3,ciso4
    ];
 */
// Another approach, same result
// JSON approach


var chart_config = {
    chart: {
        container: "#custom-colored",

        nodeAlign: "BOTTOM",

        connectors: {
            type: 'step'
        },
        node: {
            HTMLclass: 'nodeExample1'
        }
    },
    nodeStructure: {
        text: {
            name: "Balakrishnan B.R",
            title: "Principal CCIT ",
            contact: "balakrishnanbr@incometax.gov.in",
            description: "Office: PR.CCIT,BNG",
        },
        children: [
            {
                text: {
                    name: "BINOD KUMAR SINGH",
                    title: "CIT(ADMN & TPS),BNG",
                    contact: "bk.singh@incometax.gov.in",
                    description: "Office: CIT(ADMN & TPS),BNG",
                },
                HTMLclass: 'light-gray',
                children: [
                    {

                        text: {
                            name: "Tamil Selvam S",
                            title: "JCIT(HQ)(ADMN),PR.CCIT,BNG",
                            contact: "s.tamilselvam@incometax.gov.in",
                            description: "Office: PR.CCIT,BNG",
                        },
                        HTMLclass: 'light-gray',
                        stackChildren: true,
                        children: [
                            {
                                text: {
                                    name: "MANJU A",
                                    title: "ACIT(HQ)(VIG),PR.CCIT,BNG",
                                    contact: "manju.adure@incometax.gov.in",
                                    description: "Office:PR.CCIT,BNG"

                                },
                                HTMLclass: "first-draw"
                            },
                            {
                                text: {
                                    name: "PRITHVIRAJ",
                                    title: "DCIT(HQ)(ADMN),O/O PR.CCIT,BNG",
                                    contact: "prithivirskar@incometax.gov.in",
                                    description: "Office:PR.CCIT,BNG",

                                },
                                HTMLclass: "first-draw"
                            },
                            {
                                text: {
                                    name: "SATYANARAYANA SHARMA Y",
                                    title: "ITO(HQ)(VIG),O/O PR.CCIT,BNG",
                                    contact: "y.s.sharma@incometax.gov.in",
                                    description: "Office:PR.CCIT,BNG"

                                },
                                HTMLclass: "first-draw"
                            }
                            /* {
                                text: { 
                                    
                                },
                                HTMLclass: "first-draw"
                            } */
                        ]
                    },

                    {
                        text: {
                            name: "CHAKRAPANI VS",
                            title: "ADDL.CIT(HQ)(TECH),PR.CCIT,BNG",
                            contact: "varthemane.s.chakrapani@incometax.gov.in",
                            description: "Office: PR.CCIT,BNG",
                        },
                        HTMLclass: 'light-gray',
                        stackChildren: true,
                        children: [
                            {
                                text: {
                                    name: "GAD SM",
                                    title: "ITO(HQ)(TECH)-1,PR.CCIT, BNG",
                                    contact: "seshagiri.m.gad@incometax.gov.in",
                                    description: "Office:PR.CCIT,BNG"
                                },
                                HTMLclass: "first-draw"
                            }
                        ]
                    }
                ]
            },
            {
                text: {
                    name: "SUNDARARAO CHINTHALA",
                    title: "CIT(DR)(ITAT),BNG-1",
                    contact: "chinthalasr@incometax.gov.in",
                    description: "Office:ITAT,BNG",
                },
                HTMLclass: 'blue',
            },
            {
                text: {
                    name: "NEERA MALHOTRA",
                    title: "CIT(DR)(ITAT),BNG-2",
                    contact: "neera.malhotra@incometax.gov.in",
                    description: "Office:ITAT,BNG",
                },
                HTMLclass: 'blue',
                children: [
                    {
                        text: {
                            name: "SIDDAPPAJI RN",
                            title: "ADDL.CIT(ITAT)-2,BNG",
                            contact: "r.n.siddappaji@incometax.gov.in",
                            description: "Office:ITAT,BNG"

                        },
                        HTMLclass: 'blue',
                        stackChildren: true,
                        children: [
                            {
                                text: {
                                    name: "JAYARAJ E",
                                    title: "ITO(ITAT)-2,BNG",
                                    contact: "ethiraj.jayaraj@incometax.gov.in",
                                    description: "Office:ITAT,BNG"


                                },
                                HTMLclass: 'blue',

                            }
                        ]
                    }

                ]
            },
            {
                text: {
                    name: "PRADEEP KUMAR",
                    title: "CIT(DR)(ITAT),BNG-3",
                    contact: "pradeep.kumar2@incometax.gov.in",
                    description: "Office:ITAT,BNG",
                },
                HTMLclass: 'blue',
                children: [
                    {
                        text: {
                            name: "PRADEEP KUMAR PV (Dr.)",
                            title: "ADDL.CIT(ITAT)-3,BNG",
                            contact: "pv.pradeep@incometax.gov.in",
                            description: "Office:ITAT,BNG"
                        },
                        HTMLclass: 'blue',
                        stackChildren: true,
                        children: [
                            {
                                text: {
                                    name: "ANNETTE GERALDINE D'CRUZ",
                                    title: "ITO(ITAT)-3,BNG",
                                    contact: "annette.g.dcruz@incometax.gov.in",
                                    description: "Office:ITAT,BNG",
                                },
                                HTMLclass: 'blue',

                            }
                        ]
                    }

                ]
            },
            {
                text: {
                    name : "CIT(JUDICIAL)",
                    title : "CIT(JUDICIAL),BNG",
                    description : "Office:CIT(JUDICIAL),BNG"

                },
                HTMLclass: 'blue',
                children: [
                    {
                        text: {
                            name : "BIJU MK",
                            title : "ADDL.CIT(JUDICIAL),BNG",
                            contact : "mallaiah.k.biju@incometax.gov.in",
                            description : "Office:CIT(JUDICIAL),BNG",
                        },
                        HTMLclass: 'blue',
                        stackChildren: true,
                        children: [
                            {
                                text: {
                                    name : "BASAVARAJ AD",
                                    title : "ACIT(JUDICIAL),BNG",
                                    contact : "a.d.basavaraj@incometax.gov.in",
                                    description : "Office:CIT(JUDICIAL),BNG",
                                },
                                HTMLclass: 'blue',

                            },
                            {
                                text: {
                                    name : "SUDHA S PRASAD",
                                    title : "ITO(JUDICIAL)-1,BNG",
                                    contact : "sudha.s.prasad@incometax.gov.in",
                                    description : "Office:CIT(JUDICIAL),BNG",
                                },
                                HTMLclass: 'blue',

                            },
                            {
                                text: {
                                    name : "RAMANAN RVV",
                                    title : "ITO (JUDICIAL)-2, BNG",
                                    contact : "r.v.ramanan@incometax.gov.in",
                                    description : "Office:CIT(JUDICIAL),BNG"
                                },
                                HTMLclass: 'blue',

                            }
                        ]
                    }

                ]
            },
            {
                text: {
                    name: "John Green",
                    title: "Chief accounting officer",
                    contact: "Tel: 01 213 123 134",
                },
                HTMLclass: 'gray',

                children: [
                    {
                        text: {
                            name: "Erica Reel",
                            title: "Chief Customer Officer"
                        },
                        link: {
                            href: "http://www.google.com"
                        },
                        HTMLclass: 'gray',

                    }
                ]
            }
        ]
    }
};

