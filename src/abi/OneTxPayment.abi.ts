export const ABI_JSON = [
    {
        "type": "event",
        "anonymous": false,
        "name": "ExtensionInitialised",
        "inputs": []
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "LogSetAuthority",
        "inputs": [
            {
                "type": "address",
                "name": "authority",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "LogSetOwner",
        "inputs": [
            {
                "type": "address",
                "name": "owner",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "MetaTransactionExecuted",
        "inputs": [
            {
                "type": "address",
                "name": "user",
                "indexed": false
            },
            {
                "type": "address",
                "name": "relayerAddress",
                "indexed": false
            },
            {
                "type": "bytes",
                "name": "functionSignature",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "OneTxPaymentMade",
        "inputs": [
            {
                "type": "address",
                "name": "agent",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "fundamentalId",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "nPayouts",
                "indexed": false
            }
        ]
    },
    {
        "type": "function",
        "name": "authority",
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
        "name": "executeMetaTransaction",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "address",
                "name": "_user"
            },
            {
                "type": "bytes",
                "name": "_payload"
            },
            {
                "type": "bytes32",
                "name": "_sigR"
            },
            {
                "type": "bytes32",
                "name": "_sigS"
            },
            {
                "type": "uint8",
                "name": "_sigV"
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
        "name": "getChainId",
        "constant": true,
        "stateMutability": "view",
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
        "name": "multicall",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes[]",
                "name": "data"
            }
        ],
        "outputs": [
            {
                "type": "bytes[]",
                "name": "results"
            }
        ]
    },
    {
        "type": "function",
        "name": "owner",
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
        "name": "setAuthority",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "authority_"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setOwner",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "owner_"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "verify",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_owner"
            },
            {
                "type": "uint256",
                "name": "_nonce"
            },
            {
                "type": "uint256",
                "name": "_chainId"
            },
            {
                "type": "bytes",
                "name": "_payload"
            },
            {
                "type": "bytes32",
                "name": "_sigR"
            },
            {
                "type": "bytes32",
                "name": "_sigS"
            },
            {
                "type": "uint8",
                "name": "_sigV"
            }
        ],
        "outputs": [
            {
                "type": "bool",
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
                "name": "_identifier"
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
                "name": "_version"
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
                "name": "_roles"
            }
        ]
    },
    {
        "type": "function",
        "name": "makePayment",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_permissionDomainId"
            },
            {
                "type": "uint256",
                "name": "_childSkillIndex"
            },
            {
                "type": "uint256",
                "name": "_callerPermissionDomainId"
            },
            {
                "type": "uint256",
                "name": "_callerChildSkillIndex"
            },
            {
                "type": "address[]",
                "name": "_workers"
            },
            {
                "type": "address[]",
                "name": "_tokens"
            },
            {
                "type": "uint256[]",
                "name": "_amounts"
            },
            {
                "type": "uint256",
                "name": "_domainId"
            },
            {
                "type": "uint256",
                "name": "_skillId"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "makePaymentFundedFromDomain",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_permissionDomainId"
            },
            {
                "type": "uint256",
                "name": "_childSkillIndex"
            },
            {
                "type": "uint256",
                "name": "_callerPermissionDomainId"
            },
            {
                "type": "uint256",
                "name": "_callerChildSkillIndex"
            },
            {
                "type": "address[]",
                "name": "_workers"
            },
            {
                "type": "address[]",
                "name": "_tokens"
            },
            {
                "type": "uint256[]",
                "name": "_amounts"
            },
            {
                "type": "uint256",
                "name": "_domainId"
            },
            {
                "type": "uint256",
                "name": "_skillId"
            }
        ],
        "outputs": []
    }
]
