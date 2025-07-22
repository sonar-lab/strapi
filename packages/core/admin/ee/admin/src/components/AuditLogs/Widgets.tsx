import { useQueryParams } from '../../../../../admin/src/hooks/useQueryParams';
import { useGetAuditLogsQuery } from '../../services/auditLogs';

const AuditLogsWidget = () => {
  const [{ query }] = useQueryParams();
  const { data, isLoading, isError, error } = useGetAuditLogsQuery({
    ...query,
    page: 1,
    pageSize: 4,
    sort: 'date:ASC',
  });
  console.log(data);
  return <div>AuditLogsWidget</div>;
};

export { AuditLogsWidget };
