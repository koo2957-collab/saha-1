// Security token hashes configuration
// NOTE: Only SHA-256 hashes are stored here. Do not store plaintext tokens.
(function() {
	if (!window.SECURITY_CONFIG) {
		window.SECURITY_CONFIG = {};
	}
	// Inject precomputed token hashes (replace with your SHA-256 values)
	window.SECURITY_CONFIG.TOKENS_HASH = {
		USER: "",
		ADMIN: "",
		COMMANDER: [
			// e.g., "5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5"
		]
	};
})();


