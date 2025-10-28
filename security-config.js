// Security token hashes configuration
// NOTE: Only SHA-256 hashes are stored here. Do not store plaintext tokens.
(function() {
	if (!window.SECURITY_CONFIG) {
		window.SECURITY_CONFIG = {};
	}
	// Inject precomputed token hashes (replace with your SHA-256 values)
	window.SECURITY_CONFIG.TOKENS_HASH = {
		USER: "3e300de4b5312bbdcf4c2b55ad09cd9e5c91a946daf76607f8c19d361861639e",
		ADMIN: "3bb3fb54496d668661e0f242b26d68820b38cbf7a0d2f8d428a7e30ca6f80cbd",
		COMMANDER: [
			"246c0972a1086a4246507b1a65ce96a9863c33aa894ba4ca85649444f6830360", // f4501
			"21ccd694241c6b136af92501f7cfb045e4e67e7b318791de3227ef9f218a0001", // f4502
			"5b362641d7f27f65c80cd681130f7a3357cf9cb54deca284b000561263a0e780", // f4503
			"bdf7ce47661fcfea6ba7303928721500203d86e32a1931aea8cc130fc77f184c", // f4504
			"18658faf757c96e0780a21fdc235cae0d0ae6916982ba586afc1b8cbabf71b9a", // f4505
			"20680f67888dbece19ee92627638841116db54c06ced9dd62f27916e9056b279", // f4506
			"be07be6695376e6966933c0af353fe33eb47307f6b2c8d80cecb5ad06533bbac"  // f4507
		]
	};
})();



