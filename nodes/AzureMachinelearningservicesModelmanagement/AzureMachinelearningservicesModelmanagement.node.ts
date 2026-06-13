import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureMachinelearningservicesModelmanagement implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Azure Machinelearningservices Modelmanagement',
                name: 'N8nDevAzureMachinelearningservicesModelmanagement',
                icon: { light: 'file:./azure-machinelearningservices-modelmanagement.png', dark: 'file:./azure-machinelearningservices-modelmanagement.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'APIs manage Azure ML models, images, profiles, and services.',
                defaults: { name: 'Azure Machinelearningservices Modelmanagement' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAzureMachinelearningservicesModelmanagementApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}
