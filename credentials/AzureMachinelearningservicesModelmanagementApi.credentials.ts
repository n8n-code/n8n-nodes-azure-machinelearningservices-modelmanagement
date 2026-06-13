import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureMachinelearningservicesModelmanagementApi implements ICredentialType {
        name = 'N8nDevAzureMachinelearningservicesModelmanagementApi';

        displayName = 'Azure Machinelearningservices Modelmanagement API';

        icon: Icon = { light: 'file:../nodes/AzureMachinelearningservicesModelmanagement/azure-machinelearningservices-modelmanagement.png', dark: 'file:../nodes/AzureMachinelearningservicesModelmanagement/azure-machinelearningservices-modelmanagement.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure Machinelearningservices Modelmanagement API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
