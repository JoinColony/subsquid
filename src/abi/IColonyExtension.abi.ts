export const ABI_JSON = [
    {
        "type": "event",
        "anonymous": false,
        "name": "MetaTransactionExecuted",
        "inputs": [
            {
                "type": "address",
                "name": "userAddress",
                "indexed": false
            },
            {
                "type": "address",
                "name": "relayerAddress",
                "indexed": false
            },
            {
                "type": "bytes",
                "name": "payload",
                "indexed": false
            }
        ]
    },
    {
        "type": "function",
        "name": "executeMetaTransaction",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "address",
                "name": "userAddress"
            },
            {
                "type": "bytes",
                "name": "payload"
            },
            {
                "type": "bytes32",
                "name": "sigR"
            },
            {
                "type": "bytes32",
                "name": "sigS"
            },
            {
                "type": "uint8",
                "name": "sigV"
            }
        ],
        "outputs": [
            {
                "type": "bytes",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getMetatransactionNonce",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "userAddress"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "nonce"
            }
        ]
    },
    {
        "type": "function",
        "name": "identifier",
        "constant": true,
        "stateMutability": "pure",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "bytes32",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "version",
        "constant": true,
        "stateMutability": "pure",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "install",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_colony"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "finishUpgrade",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": []
    },
    {
        "type": "function",
        "name": "deprecate",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bool",
                "name": "_deprecated"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "uninstall",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": []
    },
    {
        "type": "function",
        "name": "getCapabilityRoles",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes4",
                "name": "_sig"
            }
        ],
        "outputs": [
            {
                "type": "bytes32",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getDeprecated",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "bool",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getColony",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "multicall",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes[]",
                "name": ""
            }
        ],
        "outputs": [
            {
                "type": "bytes[]",
                "name": "results"
            }
        ]
    }
]
