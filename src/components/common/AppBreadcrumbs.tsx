import { Slash } from "lucide-react";
import React, { useEffect, useState } from "react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import { useLocation, useNavigate, useNavigation } from "react-router";

type AppBreadcrumbsType = {
  name: string;
  href: string;
};
const AppBreadcrumbs = () => {
  const [breadcrumb, setBreadCrummb] = useState<AppBreadcrumbsType[]>([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    let previouseLink = "";
    const breadcrumb = location.pathname
      .split("/")
      .filter((value) => value !== "")
      .map((value) => {
        previouseLink = `${previouseLink}/${value}`;
        return {
          name: value,
          href: previouseLink,
        };
      });
    console.log(breadcrumb);
    setBreadCrummb(breadcrumb);
  }, [location]);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumb.map((item, index) => (
          <>
            <BreadcrumbItem>
              <BreadcrumbLink className="capitalize" href={item.href}>
                {item.name}
              </BreadcrumbLink>
            </BreadcrumbItem>
            {index !== breadcrumb.length - 1 && (
              <BreadcrumbSeparator>
                <Slash />
              </BreadcrumbSeparator>
            )}
          </>
        ))}
        {/* <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <Slash />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink href="/components">Components</BreadcrumbLink>
        </BreadcrumbItem> */}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default AppBreadcrumbs;
