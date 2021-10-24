/**
 * This file contains info about available Certbot DNS plugins.
 * This only works for plugins which use the standard argument structure, so:
 * --authenticator <plugin-name> --<plugin-name>-credentials <FILE> --<plugin-name>-propagation-seconds <number>
 *
 * File Structure:
 *
 *  {
 *    cloudflare: {
 *      display_name: "Name displayed to the user",
 *      package_name: "Package name in PyPi repo",
 *      version_requirement: "Optional package version requirements (e.g. ==1.3 or >=1.2,<2.0, see https://www.python.org/dev/peps/pep-0440/#version-specifiers)",
 *      dependencies: "Additional dependencies, space separated (as you would pass it to pip install)",
 *      credentials: `Template of the credentials file`,
 *      full_plugin_name: "The full plugin name as used in the commandline with certbot, including prefixes, e.g. 'certbot-dns-njalla:dns-njalla'",
 *    },
 *    ...
 *  }
 *
 */

module.exports = {
	//####################################################//
	acmedns: {
		display_name:        'ACME-DNS',
		package_name:        'certbot-dns-acmedns',
		version_requirement: '~=0.1.0',
		dependencies:        '',
		credentials:         `certbot_dns_acmedns:dns_acmedns_api_url = http://acmedns-server/
certbot_dns_acmedns:dns_acmedns_registration_file = /data/acme-registration.json`,
		full_plugin_name: 'certbot-dns-acmedns:dns-acmedns',
	},
	aliyun: {
		display_name:        'Aliyun',
		package_name:        'certbot-dns-aliyun',
		version_requirement: '~=0.38.1',
		dependencies:        '',
		credentials:         `certbot_dns_aliyun:dns_aliyun_access_key = 12345678
certbot_dns_aliyun:dns_aliyun_access_key_secret = 1234567890abcdef1234567890abcdef`,
		full_plugin_name: 'certbot-dns-aliyun:dns-aliyun',
	},
	//####################################################//
	azure: {
		display_name:        'Azure',
		package_name:        'certbot-dns-azure',
		version_requirement: '~=1.2.0',
		dependencies:        '',
		credentials:         `# This plugin supported API authentication using either Service Principals or utilizing a Managed Identity assigned to the virtual machine.
# Regardless which authentication method used, the identity will need the “DNS Zone Contributor” role assigned to it.
# As multiple Azure DNS Zones in multiple resource groups can exist, the config file needs a mapping of zone to resource group ID. Multiple zones -> ID mappings can be listed by using the key dns_azure_zoneX where X is a unique number. At least 1 zone mapping is required.

# Using a service principal (option 1)
dns_azure_sp_client_id = 912ce44a-0156-4669-ae22-c16a17d34ca5
dns_azure_sp_client_secret = E-xqXU83Y-jzTI6xe9fs2YC~mck3ZzUih9
dns_azure_tenant_id = ed1090f3-ab18-4b12-816c-599af8a88cf7

# Using used assigned MSI (option 2)
# dns_azure_msi_client_id = 912ce44a-0156-4669-ae22-c16a17d34ca5

# Using system assigned MSI (option 3)
# dns_azure_msi_system_assigned = true

# Zones (at least one always required)
dns_azure_zone1 = example.com:/subscriptions/c135abce-d87d-48df-936c-15596c6968a5/resourceGroups/dns1
dns_azure_zone2 = example.org:/subscriptions/99800903-fb14-4992-9aff-12eaf2744622/resourceGroups/dns2`,
		full_plugin_name: 'dns-azure',
	},
	//####################################################//
	cloudflare: {
		display_name: 'Cloudflare',
		package_name: 'certbot-dns-cloudflare',
		// version_requirement: '', // Official plugin, no version requirement
		dependencies: 'cloudflare',
		credentials:  `# Cloudflare API token
dns_cloudflare_api_token = 0123456789abcdef0123456789abcdef01234567`,
		full_plugin_name: 'dns-cloudflare',
	},
	//####################################################//
	cloudns: {
		display_name:        'ClouDNS',
		package_name:        'certbot-dns-cloudns',
		version_requirement: '~=0.4.0',
		dependencies:        '',
		credentials:         `# Target user ID (see https://www.cloudns.net/api-settings/)
	dns_cloudns_auth_id=1234
	# Alternatively, one of the following two options can be set:
	# dns_cloudns_sub_auth_id=1234
	# dns_cloudns_sub_auth_user=foobar

	# API password
	dns_cloudns_auth_password=password1`,
		full_plugin_name: 'dns-cloudns',
	},
	//####################################################//
	cloudxns: {
		display_name: 'CloudXNS',
		package_name: 'certbot-dns-cloudxns',
		// version_requirement: '', // Official plugin, no version requirement
		dependencies: '',
		credentials:  `dns_cloudxns_api_key = 1234567890abcdef1234567890abcdef
dns_cloudxns_secret_key = 1122334455667788`,
		full_plugin_name: 'dns-cloudxns',
	},
	//####################################################//
	corenetworks: {
		display_name:        'Core Networks',
		package_name:        'certbot-dns-corenetworks',
		version_requirement: '~=0.1.4',
		dependencies:        '',
		credentials:         `certbot_dns_corenetworks:dns_corenetworks_username = asaHB12r
certbot_dns_corenetworks:dns_corenetworks_password = secure_password`,
		full_plugin_name: 'certbot-dns-corenetworks:dns-corenetworks',
	},
	//####################################################//
	cpanel: {
		display_name:        'cPanel',
		package_name:        'certbot-dns-cpanel',
		version_requirement: '~=0.2.2',
		dependencies:        '',
		credentials:         `certbot_dns_cpanel:cpanel_url = https://cpanel.example.com:2083
certbot_dns_cpanel:cpanel_username = user
certbot_dns_cpanel:cpanel_password = hunter2`,
		full_plugin_name: 'certbot-dns-cpanel:cpanel',
	},
	//####################################################//
	desec: {
		display_name:        'deSEC',
		package_name:        'certbot-dns-desec',
		version_requirement: '~=0.3.0',
		dependencies:        '',
		credentials:         `certbot_dns_desec:dns_desec_token = YOUR_DESEC_API_TOKEN
certbot_dns_desec:dns_desec_endpoint = https://desec.io/api/v1/`,
		full_plugin_name: 'certbot-dns-desec:dns-desec',
	},
	//####################################################//
	duckdns: {
		display_name:        'DuckDNS',
		package_name:        'certbot-dns-duckdns',
		version_requirement: '~=0.6',
		dependencies:        '',
		credentials:         'dns_duckdns_token=your-duckdns-token',
		full_plugin_name:    'dns-duckdns',
	},
	//####################################################//
	digitalocean: {
		display_name:     'DigitalOcean',
		package_name:     'certbot-dns-digitalocean',
		// version_requirement: '', // Official plugin, no version requirement
		dependencies:     '',
		credentials:      'dns_digitalocean_token = 0000111122223333444455556666777788889999aaaabbbbccccddddeeeeffff',
		full_plugin_name: 'dns-digitalocean',
	},
	//####################################################//
	directadmin: {
		display_name:        'DirectAdmin',
		package_name:        'certbot-dns-directadmin',
		version_requirement: '~=0.0.23',
		dependencies:        '',
		credentials:         `directadmin_url = https://my.directadminserver.com:2222
directadmin_username = username
directadmin_password = aSuperStrongPassword`,
		full_plugin_name: 'directadmin',
	},
	//####################################################//
	dnsimple: {
		display_name:     'DNSimple',
		package_name:     'certbot-dns-dnsimple',
		// version_requirement: '', // Official plugin, no version requirement
		dependencies:     '',
		credentials:      'dns_dnsimple_token = MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAw',
		full_plugin_name: 'dns-dnsimple',
	},
	//####################################################//
	dnsmadeeasy: {
		display_name: 'DNS Made Easy',
		package_name: 'certbot-dns-dnsmadeeasy',
		// version_requirement: '', // Official plugin, no version requirement
		dependencies: '',
		credentials:  `dns_dnsmadeeasy_api_key = 1c1a3c91-4770-4ce7-96f4-54c0eb0e457a
dns_dnsmadeeasy_secret_key = c9b5625f-9834-4ff8-baba-4ed5f32cae55`,
		full_plugin_name: 'dns-dnsmadeeasy',
	},
	//####################################################//
	dnspod: {
		display_name:        'DNSPod',
		package_name:        'certbot-dns-dnspod',
		version_requirement: '~=0.1.0',
		dependencies:        '',
		credentials:         `certbot_dns_dnspod:dns_dnspod_email = "DNSPOD-API-REQUIRES-A-VALID-EMAIL"
certbot_dns_dnspod:dns_dnspod_api_token = "DNSPOD-API-TOKEN"`,
		full_plugin_name: 'certbot-dns-dnspod:dns-dnspod',
	},
	//####################################################//
	dynu: {
		display_name:        'Dynu',
		package_name:        'certbot-dns-dynu',
		version_requirement: '~=0.0.1',
		dependencies:        '',
		credentials:         'certbot_dns_dynu:dns_dynu_auth_token = YOUR_DYNU_AUTH_TOKEN',
		full_plugin_name:    'certbot-dns-dynu:dns-dynu',
	},
	//####################################################//
	eurodns: {
		display_name:        'EuroDNS',
		package_name:        'certbot-dns-eurodns',
		version_requirement: '~=0.0.4',
		dependencies:        '',
		credentials:         `dns_eurodns_applicationId = myuser
dns_eurodns_apiKey = mysecretpassword
dns_eurodns_endpoint = https://rest-api.eurodns.com/user-api-gateway/proxy`,
		full_plugin_name: 'certbot-dns-eurodns:dns-eurodns',
	},
	//####################################################//
	gandi: {
		display_name:        'Gandi Live DNS',
		package_name:        'certbot_plugin_gandi',
		version_requirement: '~=1.2.5',
		dependencies:        '',
		credentials:         'certbot_plugin_gandi:dns_api_key = APIKEY',
		full_plugin_name:    'certbot-plugin-gandi:dns',
	},
	//####################################################//
	godaddy: {
		display_name:        'GoDaddy',
		package_name:        'certbot-dns-godaddy',
		version_requirement: '~=0.2.0',
		dependencies:        '',
		credentials:         `dns_godaddy_secret = 0123456789abcdef0123456789abcdef01234567
dns_godaddy_key = abcdef0123456789abcdef01234567abcdef0123`,
		full_plugin_name: 'dns-godaddy',
	},
	//####################################################//
	google: {
		display_name: 'Google',
		package_name: 'certbot-dns-google',
		// version_requirement: '', // Official plugin, no version requirement
		dependencies: '',
		credentials:  `{
"type": "service_account",
...
}`,
		full_plugin_name: 'dns-google',
	},
	//####################################################//
	hetzner: {
		display_name:        'Hetzner',
		package_name:        'certbot-dns-hetzner',
		version_requirement: '~=1.0.4',
		dependencies:        '',
		credentials:         'certbot_dns_hetzner:dns_hetzner_api_token = 0123456789abcdef0123456789abcdef',
		full_plugin_name:    'certbot-dns-hetzner:dns-hetzner',
	},
	//####################################################//
	infomaniak: {
		display_name:        'Infomaniak',
		package_name:        'certbot-dns-infomaniak',
		version_requirement: '~=0.1.12',
		dependencies:        '',
		credentials:         'certbot_dns_infomaniak:dns_infomaniak_token = XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
		full_plugin_name:    'certbot-dns-infomaniak:dns-infomaniak',
	},
	//####################################################//
	inwx: {
		display_name:        'INWX',
		package_name:        'certbot-dns-inwx',
		version_requirement: '~=2.1.2',
		dependencies:        '',
		credentials:         `certbot_dns_inwx:dns_inwx_url = https://api.domrobot.com/xmlrpc/
certbot_dns_inwx:dns_inwx_username = your_username
certbot_dns_inwx:dns_inwx_password = your_password
certbot_dns_inwx:dns_inwx_shared_secret = your_shared_secret optional`,
		full_plugin_name: 'certbot-dns-inwx:dns-inwx',
	},
	//####################################################//
	ionos: {
		display_name:        'IONOS',
		package_name:        'certbot-dns-ionos',
		version_requirement: '~=0.0.7',
		dependencies:        '',
		credentials:         `certbot_dns_ionos:dns_ionos_prefix = myapikeyprefix
certbot_dns_ionos:dns_ionos_secret = verysecureapikeysecret
certbot_dns_ionos:dns_ionos_endpoint = https://api.hosting.ionos.com`,
		full_plugin_name: 'certbot-dns-ionos:dns-ionos',
	},
	//####################################################//
	ispconfig: {
		display_name:        'ISPConfig',
		package_name:        'certbot-dns-ispconfig',
		version_requirement: '~=0.2.0',
		dependencies:        '',
		credentials:         `certbot_dns_ispconfig:dns_ispconfig_username = myremoteuser
certbot_dns_ispconfig:dns_ispconfig_password = verysecureremoteuserpassword
certbot_dns_ispconfig:dns_ispconfig_endpoint = https://localhost:8080`,
		full_plugin_name: 'certbot-dns-ispconfig:dns-ispconfig',
	},
	//####################################################//
	isset: {
		display_name:        'Isset',
		package_name:        'certbot-dns-isset',
		version_requirement: '~=0.0.3',
		dependencies:        '',
		credentials:         `certbot_dns_isset:dns_isset_endpoint="https://customer.isset.net/api"
certbot_dns_isset:dns_isset_token="<token>"`,
		full_plugin_name: 'certbot-dns-isset:dns-isset',
	},
	joker: {
		display_name:        'Joker',
		package_name:        'certbot-dns-joker',
		version_requirement: '~=1.1.0',
		dependencies:        '',
		credentials:         `certbot_dns_joker:dns_joker_username = <Dynamic DNS Authentication Username>
certbot_dns_joker:dns_joker_password = <Dynamic DNS Authentication Password>
certbot_dns_joker:dns_joker_domain = <Dynamic DNS Domain>`,
		full_plugin_name: 'certbot-dns-joker:dns-joker',
	},
	//####################################################//
	linode: {
		display_name: 'Linode',
		package_name: 'certbot-dns-linode',
		// version_requirement: '', // Official plugin, no version requirement
		dependencies: '',
		credentials:  `dns_linode_key = 0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ64
dns_linode_version = [<blank>|3|4]`,
		full_plugin_name: 'dns-linode',
	},
	//####################################################//
	loopia: {
		display_name:        'Loopia',
		package_name:        'certbot-dns-loopia',
		version_requirement: '~=1.0.0',
		dependencies:        '',
		credentials:         `dns_loopia_user = user@loopiaapi
dns_loopia_password = abcdef0123456789abcdef01234567abcdef0123`,
		full_plugin_name: 'dns-loopia',
	},
	//####################################################//
	luadns: {
		display_name: 'LuaDNS',
		package_name: 'certbot-dns-luadns',
		// version_requirement: '', // Official plugin, no version requirement
		dependencies: '',
		credentials:  `dns_luadns_email = user@example.com
dns_luadns_token = 0123456789abcdef0123456789abcdef`,
		full_plugin_name: 'dns-luadns',
	},
	//####################################################//
	netcup: {
		display_name:        'netcup',
		package_name:        'certbot-dns-netcup',
		version_requirement: '~=1.0.0',
		dependencies:        '',
		credentials:         `certbot_dns_netcup:dns_netcup_customer_id  = 123456
certbot_dns_netcup:dns_netcup_api_key      = 0123456789abcdef0123456789abcdef01234567
certbot_dns_netcup:dns_netcup_api_password = abcdef0123456789abcdef01234567abcdef0123`,
		full_plugin_name: 'certbot-dns-netcup:dns-netcup',
	},
	//####################################################//
	njalla: {
		display_name:        'Njalla',
		package_name:        'certbot-dns-njalla',
		version_requirement: '~=1.0.0',
		dependencies:        '',
		credentials:         'certbot_dns_njalla:dns_njalla_token = 0123456789abcdef0123456789abcdef01234567',
		full_plugin_name:    'certbot-dns-njalla:dns-njalla',
	},
	//####################################################//
	nsone: {
		display_name:     'NS1',
		package_name:     'certbot-dns-nsone',
		// version_requirement: '', // Official plugin, no version requirement
		dependencies:     '',
		credentials:      'dns_nsone_api_key = MDAwMDAwMDAwMDAwMDAw',
		full_plugin_name: 'dns-nsone',
	},
	//####################################################//
	oci: {
		display_name:    'Oracle Cloud Infrastructure DNS',
		package_name:    'certbot-dns-oci',
		package_version: '0.3.6',
		dependencies:    'oci',
		credentials:     `[DEFAULT]
user = ocid1.user.oc1...
fingerprint = xx:xx:xx:xx:xx:xx:xx:xx:xx:xx:xx:xx:xx
tenancy = ocid1.tenancy.oc1...
region = us-ashburn-1
key_file = ~/.oci/oci_api_key.pem`,
		full_plugin_name: 'dns-oci',
	},
	//####################################################//
	ovh: {
		display_name: 'OVH',
		package_name: 'certbot-dns-ovh',
		// version_requirement: '', // Official plugin, no version requirement
		dependencies: '',
		credentials:  `dns_ovh_endpoint = ovh-eu
dns_ovh_application_key = MDAwMDAwMDAwMDAw
dns_ovh_application_secret = MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAw
dns_ovh_consumer_key = MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAw`,
		full_plugin_name: 'dns-ovh',
	},
	//####################################################//
	porkbun: {
		display_name:        'Porkbun',
		package_name:        'certbot-dns-porkbun',
		version_requirement: '~=0.2',
		dependencies:        '',
		credentials:         `dns_porkbun_key=your-porkbun-api-key
dns_porkbun_secret=your-porkbun-api-secret`,
		full_plugin_name: 'dns-porkbun',
	},
	//####################################################//
	powerdns: {
		display_name:        'PowerDNS',
		package_name:        'certbot-dns-powerdns',
		version_requirement: '~=0.2.0',
		dependencies:        '',
		credentials:         `certbot_dns_powerdns:dns_powerdns_api_url = https://api.mypowerdns.example.org
certbot_dns_powerdns:dns_powerdns_api_key = AbCbASsd!@34`,
		full_plugin_name: 'certbot-dns-powerdns:dns-powerdns',
	},
	//####################################################//
	regru: {
		display_name:        'reg.ru',
		package_name:        'certbot-regru',
		version_requirement: '~=1.0.2',
		dependencies:        '',
		credentials:         `certbot_regru:dns_username=username
certbot_regru:dns_password=password`,
		full_plugin_name: 'certbot-regru:dns',
	},
	//####################################################//
	rfc2136: {
		display_name: 'RFC 2136',
		package_name: 'certbot-dns-rfc2136',
		// version_requirement: '', // Official plugin, no version requirement
		dependencies: '',
		credentials:  `# Target DNS server
dns_rfc2136_server = 192.0.2.1
# Target DNS port
dns_rfc2136_port = 53
# TSIG key name
dns_rfc2136_name = keyname.
# TSIG key secret
dns_rfc2136_secret = 4q4wM/2I180UXoMyN4INVhJNi8V9BCV+jMw2mXgZw/CSuxUT8C7NKKFs AmKd7ak51vWKgSl12ib86oQRPkpDjg==
# TSIG key algorithm
dns_rfc2136_algorithm = HMAC-SHA512`,
		full_plugin_name: 'dns-rfc2136',
	},
	//####################################################//
	route53: {
		display_name: 'Route 53 (Amazon)',
		package_name: 'certbot-dns-route53',
		// version_requirement: '', // Official plugin, no version requirement
		dependencies: '',
		credentials:  `[default]
aws_access_key_id=AKIAIOSFODNN7EXAMPLE
aws_secret_access_key=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY`,
		full_plugin_name: 'dns-route53',
	},
	//####################################################//
	transip: {
		display_name:        'TransIP',
		package_name:        'certbot-dns-transip',
		version_requirement: '~=0.3.3',
		dependencies:        '',
		credentials:         `certbot_dns_transip:dns_transip_username = my_username
certbot_dns_transip:dns_transip_key_file = /etc/letsencrypt/transip-rsa.key`,
		full_plugin_name: 'certbot-dns-transip:dns-transip',
	},
	//####################################################//
	vultr: {
		display_name:        'Vultr',
		package_name:        'certbot-dns-vultr',
		version_requirement: '~=1.0.3',
		dependencies:        '',
		credentials:         'certbot_dns_vultr:dns_vultr_key = YOUR_VULTR_API_KEY',
		full_plugin_name:    'certbot-dns-vultr:dns-vultr',
	},
	//####################################################//
	websupportsk: {
		display_name:        'Websupport.sk',
		package_name:        'certbot-dns-websupportsk',
		version_requirement: '~=0.1.6',
		dependencies:        '',
		credentials:         `dns_websupportsk_api_key = <api_key>
dns_websupportsk_secret = <secret>
dns_websupportsk_domain = example.com`,
		full_plugin_name: 'dns-websupportsk',
	},
};
