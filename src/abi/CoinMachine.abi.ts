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
        "name": "PeriodUpdated",
        "inputs": [
            {
                "type": "uint256",
                "name": "activePeriod",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "currentPeriod",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "PriceEvolutionSet",
        "inputs": [
            {
                "type": "bool",
                "name": "evolvePrice",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "TokensBought",
        "inputs": [
            {
                "type": "address",
                "name": "buyer",
                "indexed": true
            },
            {
                "type": "address",
                "name": "token",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "numTokens",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "totalCost",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "WhitelistSet",
        "inputs": [
            {
                "type": "address",
                "name": "whitelist",
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
                "name": "_userAddress"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "_nonce"
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
        "name": "initialise",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_token"
            },
            {
                "type": "address",
                "name": "_purchaseToken"
            },
            {
                "type": "uint256",
                "name": "_periodLength"
            },
            {
                "type": "uint256",
                "name": "_windowSize"
            },
            {
                "type": "uint256",
                "name": "_targetPerPeriod"
            },
            {
                "type": "uint256",
                "name": "_maxPerPeriod"
            },
            {
                "type": "uint256",
                "name": "_userLimitFraction"
            },
            {
                "type": "uint256",
                "name": "_startingPrice"
            },
            {
                "type": "address",
                "name": "_whitelist"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setWhitelist",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_whitelist"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "buyTokens",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "uint256",
                "name": "_numTokens"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "updatePeriod",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": []
    },
    {
        "type": "function",
        "name": "getPurchaseToken",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": "_token"
            }
        ]
    },
    {
        "type": "function",
        "name": "getToken",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": "_token"
            }
        ]
    },
    {
        "type": "function",
        "name": "getActivePeriod",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": "_period"
            }
        ]
    },
    {
        "type": "function",
        "name": "getActiveSold",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": "_sold"
            }
        ]
    },
    {
        "type": "function",
        "name": "getActiveIntake",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": "_intake"
            }
        ]
    },
    {
        "type": "function",
        "name": "getEMAIntake",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": "_amount"
            }
        ]
    },
    {
        "type": "function",
        "name": "getTokenBalance",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": "_balance"
            }
        ]
    },
    {
        "type": "function",
        "name": "getPeriodLength",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": "_length"
            }
        ]
    },
    {
        "type": "function",
        "name": "getWindowSize",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": "_size"
            }
        ]
    },
    {
        "type": "function",
        "name": "getTargetPerPeriod",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": "_target"
            }
        ]
    },
    {
        "type": "function",
        "name": "getMaxPerPeriod",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": "_max"
            }
        ]
    },
    {
        "type": "function",
        "name": "getCurrentPrice",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": "_price"
            }
        ]
    },
    {
        "type": "function",
        "name": "getSellableTokens",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": "_remaining"
            }
        ]
    },
    {
        "type": "function",
        "name": "getUserLimit",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_user"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "_max"
            }
        ]
    },
    {
        "type": "function",
        "name": "getMaxPurchase",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_user"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "_max"
            }
        ]
    },
    {
        "type": "function",
        "name": "getWhitelist",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": "_whitelist"
            }
        ]
    },
    {
        "type": "function",
        "name": "getEvolvePrice",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "bool",
                "name": "_evolve"
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "TokensBought",
        "inputs": [
            {
                "type": "address",
                "name": "buyer",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "numTokens",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "totalCost",
                "indexed": false
            }
        ]
    }
]
