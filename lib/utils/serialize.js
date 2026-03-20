export function stripIcons(services) {
  return services.map(({ icon, ...rest }) => rest);
}
